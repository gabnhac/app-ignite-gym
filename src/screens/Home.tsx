import { useState } from "react";
import { FlatList } from "react-native";
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
    const [exercises, setExercises] = useState([
        "Puxda frontal",
        "Remada curvada",
        "Remada unilateral",
        "Levantamento terra",
        "2",
        "5",
        "3"
    ]);

    const [groups, setGroups] = useState(['Costas', 'Ombro', 'Triceps', "Bíceps"])
    const [groupSelected, setGroupSelected] = useState("Costas");

    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={groups}
                keyExtractor={(item => item)}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected === item}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                    marginVertical: 30,
                    maxHeight: 44,
                    minHeight: 44
                }}
            />

            <VStack px="$8" flex={1}>
                <HStack justifyContent="space-between" alignItems="center" mb="$5">
                    <Heading color="$gray200" fontSize="$md" fontFamily="$heading">Exercícios</Heading>

                    <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                        {exercises.length}
                    </Text>
                </HStack>

                <FlatList
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <ExerciseCard/>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 20
                    }}
                />
            </VStack>

            
        </VStack>
    )
}