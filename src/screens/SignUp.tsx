import { useState } from 'react';
import { VStack, Image, Center, Text, Heading, ScrollView, useToast } from '@gluestack-ui/themed';

import { useNavigation } from '@react-navigation/native';

import BackgroundImg from '@assets/background.png';
import Logo from '@assets/logo.svg'

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { api } from '../service/api';
import { AppError } from '@utils/AppError';
import { ToastMessage } from '@components/ToastMessage';

type formDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirm: string
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o email').email('Email inválido'),
    password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 digitos'),
    password_confirm: yup.string().required('Confirme a senha').oneOf([yup.ref('password'), ''], 'A confirmação da senha não confere'),

});

export function SignUp() {
    //Formulário sem hook fom
    //const [name, setName] = useState('');
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    //const [confirmPassword, setConfirmPassword] = useState('');

    const toast = useToast();

    const { control, handleSubmit, formState: { errors } } = useForm<formDataProps>({
        resolver: yupResolver(signUpSchema)
    });

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    async function handleSignUp({email, name, password}: formDataProps) {
        // const response = await fetch('http://192.168.3.34:3333/users', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({email, name, password})
        // });
        // const data = await response.json();
        // console.log(data);
        try {
            const response = await api.post('/users', {email, name, password});
            console.log(response);
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente mais tarde.';

            toast.show({
                placement: 'top',
                render: ({id}) => (
                    <ToastMessage
                        id={id}
                        title={title}
                        onClose={() => {}}
                    />
                )
            })
        }
        
        
    }
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} py='$5'>
                <Image
                    w='$full'
                    height={624}
                    source={BackgroundImg}
                    alt="Pessoas treinando"
                    position='absolute'
                />
                <VStack flex={1} px='$10'>
                    <Center my='$24'>
                        <Logo />
                        <Text color='$gray100' fontSize='$sm'>
                            Treine sua mente e seu corpo
                        </Text>
                    </Center>
                    <Center gap='$2' flex={1}>
                        <Heading color='$gray100'>Crie sua conta</Heading>

                        <Controller
                            control={control}
                            name='name'
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder='Nome'
                                    onChangeText={onChange}
                                    value={value}
                                    onSubmitEditing={handleSubmit(handleSignUp)}
                                    returnKeyType='send'
                                    errorMessage={errors.name?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='email'
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder='E-mail'
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    onChangeText={onChange}
                                    value={value}
                                    onSubmitEditing={handleSubmit(handleSignUp)}
                                    returnKeyType='send'
                                    errorMessage={errors.email?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='password'
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder='Senha'
                                    secureTextEntry
                                    onChangeText={onChange}
                                    value={value}
                                    onSubmitEditing={handleSubmit(handleSignUp)}
                                    returnKeyType='send'
                                    errorMessage={errors.password?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='password_confirm'
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder='Confirmar Senha'
                                    secureTextEntry
                                    onChangeText={onChange}
                                    value={value}
                                    onSubmitEditing={handleSubmit(handleSignUp)}
                                    returnKeyType='send'
                                    errorMessage={errors.password_confirm?.message}
                                />
                            )}
                        />

                        <Button title='Criar e acessar' onPress={handleSubmit(handleSignUp)} />
                    </Center>

                    <Button
                        title='Voltar para o login'
                        variant='outline'
                        mt='$12'
                        onPress={handleGoBack}
                    />

                </VStack>
            </VStack>
        </ScrollView>
    )
}