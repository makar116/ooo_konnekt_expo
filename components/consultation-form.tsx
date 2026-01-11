"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ConsultationFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ConsultationForm({
  open,
  onOpenChange,
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  )

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно для заполнения"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен для заполнения"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введите корректный email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон обязателен для заполнения"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Сообщение обязательно для заполнения"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length === 0) return ""
    if (digits.length <= 1) return `+7 (${digits}`
    if (digits.length <= 4) return `+7 (${digits.slice(1)}`
    if (digits.length <= 7)
      return `+7 (${digits.slice(1, 4)}) ${digits.slice(4)}`
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData({ ...formData, phone: formatted })
    if (errors.phone) {
      setErrors({ ...errors, phone: "" })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Ошибка при отправке формы")
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onOpenChange(false)
        setSubmitStatus(null)
      }, 2000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setErrors({})
      setSubmitStatus(null)
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent onClose={handleClose} className="bg-zinc-50 dark:bg-zinc-900">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Свяжитесь с нами
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Готовы начать ваш проект преобразования?
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Имя
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Телефон
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 (999) 999-99-99"
                value={formData.phone}
                onChange={handlePhoneChange}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Сообщение
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Расскажите о вашем проекте..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-destructive">{errors.message}</p>
              )}
            </div>

            {submitStatus === "success" && (
              <div className="p-3 rounded-md bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-sm">
                Сообщение успешно отправлено!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-3 rounded-md bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 text-sm">
                Произошла ошибка при отправке. Попробуйте еще раз.
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-electric-blue hover:bg-electric-blue/90 text-primary font-medium py-3"
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

