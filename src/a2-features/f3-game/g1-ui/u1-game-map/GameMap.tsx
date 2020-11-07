import React, {useEffect, useRef, useState} from 'react'
import map from './map.jpg'

const m_canvas = document.createElement('canvas')
m_canvas.width = 1000
m_canvas.height = 500
const m_context = m_canvas.getContext('2d')

// канвас, перемещение, кнопки использовать/убить/заявить/саботаж
const GameMap = () => {
    const canvRef = useRef<HTMLCanvasElement | null>(null)
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>()

    useEffect(() => {
        if (!ctx && canvRef && canvRef.current) { // @ts-ignore
            setCtx(canvRef.current.getContext('2d'))
        }

        const player = {
            x: 600,
            y: 600,
        }

        if (ctx && m_context) {
            const image = new Image()
            image.src = map
            image.onload = function () {

                // function render() {
                //
                //     requestAnimationFrame(render);
                // }

                m_context.drawImage(image, -player.x, -player.y)

                m_context.fillStyle = 'lime'
                m_context.fillRect(450, 200, 100, 100)

                ctx.drawImage(m_canvas, 0, 0)
            }


        }
    }, [ctx])

    return (
        <>

            <canvas height={500} width={1000} ref={canvRef}/>
        </>
    )
}

export default GameMap
