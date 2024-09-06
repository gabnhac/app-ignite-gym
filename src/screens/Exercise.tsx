import { Text, VStack, Icon, HStack, Heading, Image, Box } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";

import { useNavigation } from "@react-navigation/native";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import Repetition from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export function Exercise() {

    const navigation = useNavigation()
    function handleGoBack() {
        navigation.goBack()
    }
    return (
        <VStack flex={1}>
            <VStack px="$8" bg="$gray600" pt="$12">
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={ArrowLeft} color="$green500" size="xl" />
                </TouchableOpacity>

                <HStack justifyContent="space-between"
                    alignItems="center"
                    mt="$4"
                    mb="$8"
                >
                    <Heading fontSize="$lg"
                        fontFamily="$heading"
                        color="$gray100"
                        flexShrink={1}
                    >
                        Puxada frontal</Heading>

                    <HStack alignItems="center">
                        <BodySvg />

                        <Text color="$gray200" ml="$1" textTransform="capitalize">costas</Text>
                    </HStack>
                </HStack>
            </VStack>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 32}}>
                <VStack p="$8">
                    <Image
                        source={{ uri: "https://static8.depositphotos.com/1571321/1048/v/450/depositphotos_10489201-stock-illustration-sketch-of-a-woman-working.jpg" }}
                        alt="Exercício"
                        mb="$3"
                        resizeMode="cover"
                        rounded="$lg"
                        w="$full"
                        h="$96"
                    />
                    <Box bg="$gray600" rounded="$md" pb="$4" px="$4" >
                        <HStack alignItems="center" justifyContent="space-around" mb="$6" mt="$5">
                            <HStack>
                                <SeriesSvg />
                                <Text color="$gray200" ml="$2">3 séries</Text>
                            </HStack>
                            <HStack>
                                <Repetition />
                                <Text color="$gray200" ml="$2"> 12 repetições</Text>
                            </HStack>
                        </HStack>
                        <Button title="Marcar como realizado"/>
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    )
}