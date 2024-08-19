import { Heading, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { Icon } from "@gluestack-ui/themed";

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
    return (
        <TouchableOpacity
            {...rest}
        >
            <HStack bg="$gray600" alignItems="center" p="$2" pr="$4" rounded="$md" mb="$3">
                <Image
                    source={{ uri: "https://static8.depositphotos.com/1571321/1048/v/450/depositphotos_10489201-stock-illustration-sketch-of-a-woman-working.jpg" }}
                    alt="Treinamento"
                    w="$16"
                    h="$16"
                    rounded="$md"
                    mr="$4"
                    resizeMode="cover"
                />

                <VStack flex={1}>
                    <Heading fontSize="$lg" color="white" fontFamily="$heading">
                        Puxada Frontal
                    </Heading>
                    <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}>3 séries x 12 repetições</Text>
                </VStack>

                <Icon as={ChevronRight} color="$gray300"/>
            </HStack>



        </TouchableOpacity>
    )
}