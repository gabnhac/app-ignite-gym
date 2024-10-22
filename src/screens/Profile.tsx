import { useState } from "react"
import { Input } from "@components/Input"
import { ScreenHeader } from "@components/ScreenHeader"
import { UserPhoto } from "@components/UserPhoto"
import { Center, Heading, Text, useToast, VStack } from "@gluestack-ui/themed"
import { Alert, ScrollView, TouchableOpacity } from "react-native"
import { Button } from "@components/Button"
import * as ImagePicker from "expo-image-picker"
import * as FileSystem from "expo-file-system"
import { ToastMessage } from "@components/ToastMessage"

export function Profile() {
    const [userPhoto, setUserPhoto] = useState("https://github.com/gabnhac.png");
    const toast = useToast()

    async function handleUserPhotoSelect() {
        const fotoSelected = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            aspect: [4, 4],
            allowsEditing: true
        });
        

        if(fotoSelected.canceled){
            return
        }

        const photoUri = fotoSelected.assets[0].uri;

        if(photoUri){
            const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as { size: number };

            if(photoInfo.size && photoInfo.size /1024 /1024 > 1){
                return toast.show({
                    render: ({id}) => <ToastMessage id={id} 
                    title="Imagem muito grande!" 
                    description="Escolha uma imagem de até 5MB" 
                    action="error" 
                    onClose={() => toast.close(id)}/>
                })
            }
        }

        setUserPhoto(photoUri);

    }

    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />

            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt="$6" px="$10">
                    <UserPhoto
                        source={{ uri: userPhoto }}
                        alt="Foto de perfil"
                        size="xl"
                    />
                    <TouchableOpacity onPress={handleUserPhotoSelect}>
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

                        <Input value="gluceploiu@gmail.com" bg="$gray600" isReadOnly />
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

                    <Center width="100%" gap="$4">
                        <Input placeholder="Senha antiga" secureTextEntry bg="$gray600" />
                        <Input placeholder="Nova senha" secureTextEntry bg="$gray600" />
                        <Input placeholder="Confirme nova senha" secureTextEntry bg="$gray600" />

                        <Button title="Atualizar" />
                    </Center>
                </Center>


            </ScrollView>
        </VStack>
    )
}