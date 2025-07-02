import { useEffect, useState, useCallback, useRef } from "react"

const useWebsocketData = (url, maxItem = 100) => {
    const [data, setData] = useState([])
    const [isConnected, setIsConnected] = useState(false)
    const [error, setError] = useState(null)
    const socketRef = useRef(null)
    const reconnectTimeoutRef = useRef(null)
    const maxReconnectAttempts = 5
    const [reconnectAttempts, setReconnectAttempts] = useState(0)

    const addData = useCallback((newData) => {
        setData(prev => {
            const updatedData = [...prev, newData].slice(-maxItem)
            return updatedData
        })
    }, [maxItem])

    const connectWebSocket = useCallback(() => {
        try {
            if (socketRef.current?.readyState === WebSocket.OPEN) {
                return
            }

            const socket = new WebSocket(url)
            socketRef.current = socket

            socket.onopen = () => {
                setIsConnected(true)
                setError(null)
                setReconnectAttempts(0)
            }

            socket.onmessage = (event) => {
                try {
                    const parsed = JSON.parse(event.data)
                    if (parsed.id && parsed.time) {
                        addData(parsed)
                    }
                } catch (err) {
                    setError('Data parsing error')
                }
            }

            socket.onclose = () => {
                setIsConnected(false)

                if (reconnectAttempts < maxReconnectAttempts) {
                    const timeout = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)

                    reconnectTimeoutRef.current = setTimeout(() => {
                        setReconnectAttempts(prev => prev + 1)
                        connectWebSocket()
                    }, timeout)
                } else {
                    setError('Max reconnection attempts reached')
                }
            }

        } catch (err) {
            setError('Failed to create connection')
        }
    }, [url, addData, reconnectAttempts, maxReconnectAttempts])

    useEffect(() => {
        connectWebSocket()

        return () => {
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current)
            }

            if (socketRef.current) {
                socketRef.current.close()
                socketRef.current = null
            }
        }
    }, [connectWebSocket])

    const reconnect = useCallback(() => {
        setReconnectAttempts(0)
        setError(null)
        connectWebSocket()
    }, [connectWebSocket])

    return {
        data,
        isConnected,
        error,
        reconnect
    }
}

export default useWebsocketData