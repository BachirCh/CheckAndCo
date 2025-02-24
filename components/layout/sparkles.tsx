"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface SparklesProps {
    id?: string
    background?: string
    minSize?: number
    maxSize?: number
    particleDensity?: number
    className?: string
    particleColor?: string
}

 const SparklesCore = ({
    id = "tsparticles",
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.4,
    particleDensity = 10000,
    className = "h-full w-full",
    particleColor = "#FFFFFF",
}: SparklesProps) => {
    const getPageWidth = () => window.innerWidth;
    const getPageHeight = () => document.documentElement.scrollHeight;
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: getPageHeight() })

    useEffect(() => {
        if (typeof window === "undefined") return

        setDimensions({
            width: getPageWidth(),
            height: getPageHeight(),
        })

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let particles: Particle[] = []
        let animationFrameId: number

        canvas.width = getPageWidth()
        canvas.height = getPageHeight()


        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.size = Math.random() * (maxSize - minSize) + minSize
                this.speedX = Math.random() * 0.5 - 0.25
                this.speedY = Math.random() * 0.5 - 0.25
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (this.x > canvas!.width) this.x = 0
                if (this.x < 0) this.x = canvas!.width
                if (this.y > canvas!.height) this.y = 0
                if (this.y < 0) this.y = canvas!.height
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = particleColor
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const init = () => {
            particles = []
            for (let i = 0; i < particleDensity; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle) => {
                particle.update()
                particle.draw()
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        init()
        animate()

        const handleResize = () => {
            if (typeof window === "undefined") return

            canvas.width = getPageWidth()
            canvas.height = getPageHeight()
            setDimensions({
                width: getPageWidth(),
                height: getPageHeight(),
            })
            init()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [maxSize, minSize, particleColor, particleDensity])

    return (
        <canvas
            ref={canvasRef}
            id={id}
            className={`${className} max-w-full`}
            style={{
                background,
                width: dimensions.width,
                height: dimensions.height,
            }}
        />
    )
}

export default SparklesCore;