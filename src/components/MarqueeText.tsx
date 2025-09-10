import React, { useEffect, useRef, useState } from "react"

type MarqueeTextProps = {
	text: string
	wrapperClassName?: string
	textClassName?: string
	speedPxPerSec?: number
}

function MarqueeText({ text, wrapperClassName = "", textClassName = "", speedPxPerSec = 60 }: MarqueeTextProps) {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const contentRef = useRef<HTMLSpanElement | null>(null)
	const [shouldAnimate, setShouldAnimate] = useState(false)
	const [distancePx, setDistancePx] = useState(0)
	const [durationSec, setDurationSec] = useState(8)

	const recompute = () => {
		const container = containerRef.current
		const content = contentRef.current
		if (!container || !content) return

		const containerWidth = container.clientWidth
		const contentWidth = content.scrollWidth
		if (contentWidth > containerWidth + 1) {
			const distance = contentWidth - containerWidth
			setDistancePx(distance)
			const oneWayDuration = Math.max(4, distance / speedPxPerSec)
			setDurationSec(oneWayDuration * 2)
			setShouldAnimate(true)
		} else {
			setShouldAnimate(false)
		}
	}

	useEffect(() => {
		recompute()
	}, [text])

	useEffect(() => {
		const ro = new ResizeObserver(() => recompute())
		const roContent = new ResizeObserver(() => recompute())
		if (containerRef.current) ro.observe(containerRef.current)
		if (contentRef.current) roContent.observe(contentRef.current)
		// Recompute once fonts are loaded since text width can change
		if ((document as any).fonts && typeof (document as any).fonts.ready?.then === "function") {
			;(document as any).fonts.ready.then(() => recompute())
		}
		return () => {
			ro.disconnect()
			roContent.disconnect()
		}
	}, [])

	const styleVars = shouldAnimate
		? ({
				["--marquee-distance" as any]: `${distancePx}px`,
				["--marquee-duration" as any]: `${durationSec}s`,
		  } as React.CSSProperties)
		: undefined

	return (
		<div ref={containerRef} className={`overflow-hidden whitespace-nowrap text-left ${wrapperClassName}`}>
			<span
				ref={contentRef}
				className={`inline-block ${textClassName} ${shouldAnimate ? "marquee-animate" : ""}`}
				style={styleVars}
			>
				{text}
			</span>
		</div>
	)
}

export default MarqueeText


