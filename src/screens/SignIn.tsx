import { VStack, Image, Center, Text, Heading, ScrollView } from '@gluestack-ui/themed';

import BackgroundImg from '@assets/background.png';
import Logo from '@assets/logo.svg'

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

export function SignIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAccount(){
        navigation.navigate("signUp")
    }

    return(
        <ScrollView
            contentContainerStyle={{flexGrow: 1}}
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
                        <Logo/>
                        <Text color='$gray100' fontSize='$sm'>
                            Treine sua mente e seu corpo
                        </Text>
                    </Center>
                    <Center gap='$2'>
                        <Heading color='$gray100'>Acesse a conta</Heading>
                        <Input placeholder='E-mail' keyboardType='email-address' autoCapitalize='none'/>
                        <Input placeholder='Senha' secureTextEntry/>
                        <Button title='Acessar'/>
                    </Center>
                    <Center flex={1} justifyContent='center'>
                        <Text
                            color='$gray100'
                            fontSize='$sm'
                            mb='$3'
                            fontFamily='$body'
                        >Ainda não tem acesso?</Text>
            
                        <Button 
                            title='Criar conta' 
                            variant='outline'
                            onPress={handleNewAccount}
                        />
                    </Center>
                </VStack>
            </VStack>
        </ScrollView>
    )
}