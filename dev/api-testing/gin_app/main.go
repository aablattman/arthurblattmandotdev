package main

import (
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()
    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{"message": "pong"})
    })
    r.POST("/ping", func(c *gin.Context) {
        var json map[string]interface{}
        if err := c.BindJSON(&json); err != nil {
            c.JSON(400, gin.H{"error": "invalid JSON"})
            return
        }
        c.JSON(200, gin.H{"message": "pong", "input": json})
    })
    r.Run(":8000")
}
