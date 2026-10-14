import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cn } from "cn"

/**
 * A hairline scale with a square, hollow index. `ticks` draws a ruler under
 * a horizontal slider: that many intervals, every fifth mark longer.
 */
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ticks,
  orientation,
  ...props
}: SliderPrimitive.Root.Props & {
  /** Number of intervals on a ruler below a horizontal slider. */
  ticks?: number
}) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]
  const showTicks = !!ticks && ticks > 0 && orientation !== "vertical"

  return (
    <SliderPrimitive.Root
      className={cn(
        "group/slider data-horizontal:w-full data-vertical:h-full",
        className
      )}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      orientation={orientation}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center py-2 select-none data-disabled:opacity-45 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col data-vertical:px-2 data-vertical:py-0">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow bg-border select-none data-horizontal:h-px data-horizontal:w-full data-vertical:h-full data-vertical:w-px"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="bg-foreground select-none data-horizontal:h-full data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="relative block size-[11px] shrink-0 rounded-[1px] border border-foreground bg-card text-signal shadow-glow ring-ring/30 transition-[box-shadow,border-color] duration-150 ease-out-quint select-none after:absolute after:-inset-2.5 hover:ring-2 focus-visible:ring-2 focus-visible:outline-hidden active:ring-4 has-[:focus-visible]:ring-2 data-dragging:ring-4 data-disabled:pointer-events-none"
          />
        ))}
      </SliderPrimitive.Control>
      {showTicks && (
        <div
          aria-hidden
          data-slot="slider-ticks"
          className="flex justify-between px-[5px] group-data-disabled/slider:opacity-45"
        >
          {Array.from({ length: ticks + 1 }, (_, index) => (
            <i
              key={index}
              className={cn(
                "w-px",
                index % 5 === 0 ? "h-[7px] bg-border-strong" : "h-1 bg-border"
              )}
            />
          ))}
        </div>
      )}
    </SliderPrimitive.Root>
  )
}

export { Slider }
