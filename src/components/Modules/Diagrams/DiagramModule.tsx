import { useRef, useEffect } from "react";

const DiagramModule = () => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas:HTMLCanvasElement | null = canvasRef.current;
    const ctx:CanvasRenderingContext2D = canvas.getContext('2d');

    ctx.fillStyle = '#f3f3f3';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }, [])

  return (
    <section className="bg-white shadow w-fit rounded-lg p-4 m-2 flex items-center">
      <div>
        {/* Diagram */}
      </div>
      <canvas width="500" height="500" ref={canvasRef}>
        An alternative text describing what your canvas displays.
      </canvas>
    </section>
  )
};

export default DiagramModule;
