import { Center, Heading } from "@gluestack-ui/themed";

type Props = {
    title: string;
}

export function ScreenHeader({title}:Props){
    return(
        <Center bg="$gray600" pb="$6" pt="$16">
            <Heading fontSize="$xl" color="$gray100" fontFamily="$heading">
                {title}
            </Heading>
        </Center>
    )
}