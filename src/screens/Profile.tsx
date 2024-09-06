import { Input } from "@components/Input"
import { ScreenHeader } from "@components/ScreenHeader"
import { UserPhoto } from "@components/UserPhoto"
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed"
import { ScrollView, TouchableOpacity } from "react-native"
import { Button } from "@components/Button"

export function Profile() {
    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />

            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt="$6" px="$10">
                    <UserPhoto
                        source={{ uri: "https://github.com/gabnhac.png" }}
                        alt="Foto de perfil"
                        size="xl"
                    />
                    <TouchableOpacity>
                        <Text
                            color="$green500"
                            fontFamily="$heading"
                            fontSize="$md"
                            mt="$2"
                            mb="$8"
                        >
                            Alterar Foto</Text>
                    </TouchableOpacity>

                    <Center w="$full" gap="$4">
                        <Input placeholder="Nome" bg="$gray600" />

                        <Input value="gluceploiu@gmail.com" bg="$gray600" isReadOnly/>
                    </Center>

                    <Heading
                            alignSelf="flex-start"
                            fontFamily="$heading"
                            color="$gray200"
                            fontSize="$md"
                            mt="$12"
                            mb="$2"
                        
                        >
                            Alterando senha
                        </Heading>

                        <Center>
                            <Input placeholder="Senha antiga" secureTextEntry bg="$gray600" />
                            <Input placeholder="Nova senha"  secureTextEntry bg="$gray600" />
                            <Input placeholder="Confirme nova senha" secureTextEntry bg="$gray600" />

                            <Button title="Atualizar"/>
                        </Center>
                </Center>


            </ScrollView>
        </VStack>
    )
}