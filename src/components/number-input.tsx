import { useState, useEffect, type ChangeEvent } from 'react'
import { Minus, Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NumberInputProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  className?: string
  inputClassName?: string
  buttonClassName?: string
}

export function NumberInput({
  value,
  onChange,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  disabled = false,
  className,
  inputClassName,
  buttonClassName,
}: NumberInputProps) {
  const [inputValue, setInputValue] = useState<string>(value.toString())

  useEffect(() => {
    setInputValue(value.toString())
  }, [value])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)

    const newValue =
      e.target.value === '' ? min : Number.parseFloat(e.target.value)

    if (!Number.isNaN(newValue)) {
      const clampedValue = Math.min(Math.max(newValue, min), max)
      onChange(clampedValue)
    }
  }

  const handleBlur = () => {
    // Ensure the displayed value matches the actual value on blur
    setInputValue(value.toString())
  }

  const increment = () => {
    const newValue = Math.min(value + step, max)
    onChange(newValue)
    setInputValue(newValue.toString())
  }

  const decrement = () => {
    const newValue = Math.max(value - step, min)
    onChange(newValue)
    setInputValue(newValue.toString())
  }

  return (
    <div
      className={cn(
        'flex items-center border border-input rounded-md',
        className
      )}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={cn('rounded-r-none', buttonClassName)}
        onClick={decrement}
        disabled={disabled || value <= min}
        aria-label="Decrease value"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        disabled={disabled}
        className={cn(
          'rounded-none text-center border-0 w-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
          inputClassName
        )}
        aria-label="Number input"
      />
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className={cn('rounded-l-none', buttonClassName)}
        onClick={increment}
        disabled={disabled || value >= max}
        aria-label="Increase value"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
