/* eslint-disable prettier/prettier */
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
    email: z.string().email()
})

type signInFormProps = z.infer<typeof signInForm>

export function SignIn() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<signInFormProps>()

    async function handleSignIn(data: signInFormProps) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))

            toast.success('Enviamos um link de autenticação para o seu e-mail', {
                action: {
                    label: 'Reenviar',
                    onClick: () => handleSignIn(data)
                }
            })
        } catch (err) {
            toast.error("Credenciais inválidas")
        }

    }

    return (
        <>
            <Helmet title="login" />
            <div className="p-8">
                <Button className="absolute right-8 top-8" asChild variant="ghost" >
                    <Link to='/sign-up'>
                        Novo estabelecimento
                    </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Acessar Painel
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Acompanhe suas vendas pelo painel de parceiro
                        </p>
                    </div>

                    <form className='space-y-4' onSubmit={handleSubmit(handleSignIn)}>
                        <div className='space-y-2'>
                            <Label htmlFor="email">Seu Email</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>

                        <Button className="w-full" type="submit" disabled={isSubmitting}>Acessar</Button>
                    </form>

                </div>
            </div>

        </>
    )
}
