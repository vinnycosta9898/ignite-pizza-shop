/* eslint-disable prettier/prettier */
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email()
})

type signUpFormProps = z.infer<typeof signUpForm>

export function SignUp() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<signUpFormProps>()

    async function handlesignUp(data: signUpFormProps) {
        try {
            console.log(data)
            await new Promise((resolve) => setTimeout(resolve, 2000))

            toast.success('Enviamos um link de autenticação para o seu e-mail', {
                action: {
                    label: 'Login',
                    onClick: () => navigate('/sign-in')
                }
            })
        } catch (err) {
            toast.error("Erro ao cadastrar o restaurante")
        }

    }
    return (
        <>
            <Helmet title="Cadastro" />
            <div className="p-8">
                <Button className="absolute right-8 top-8" variant="ghost">
                    <Link to='/sign-in'>
                        Ir para Login
                    </Link>
                </Button>

                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Criar Conta Grátis
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Seja um parceiro e comece as suas vendas
                        </p>
                    </div>

                    <form className='space-y-4' onSubmit={handleSubmit(handlesignUp)}>
                        <div className='space-y-2'>
                            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                            <Input id="restaurantName" type="text" {...register('restaurantName')} />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor="managerName">Seu nome</Label>
                            <Input id="managerName" type="text" {...register('managerName')} />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor="email">Seu Email</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor="phone">Seu Telefone</Label>
                            <Input id="phone" type="tel" {...register('phone')} />
                        </div>

                        <Button className="w-full" type="submit" disabled={isSubmitting}>Finalizar Cadastro</Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar você concorda com os nossos {` `}
                            <a href="#" className="underline undrline-offset-4">termos de serviço</a> e {` `}
                            <a href="#" className="underline undrline-offset-4">políticas de pivacidade</a>.
                        </p>
                    </form>

                </div>
            </div >

        </>
    )
}
