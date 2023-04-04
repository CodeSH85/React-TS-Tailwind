import { useRef, useEffect } from "react";

const DiagramModule = () => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])


  return (
    <section className="bg-white shadow w-fit rounded-lg p-4 m-2 flex items-center">
      <div>
        Diagram
      </div>
      <canvas width="300" height="300" ref={canvasRef}>
        An alternative text describing what your canvas displays.
      </canvas>
    </section>
  )
};

export default DiagramModule;
