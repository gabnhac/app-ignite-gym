import { ComponentProps } from "react"

import { Button as GluestackButton, Text, ButtonSpinner } from "@gluestack-ui/themed"

type Props = ComponentProps<typeof GluestackButton> & {
    title: string;
    isLoading?: boolean;
    variant?: 'solid' | 'outline'; 
}

export function Button({variant='solid' ,isLoading = false, title, ...rest }: Props) {
    return (
        <GluestackButton
            w='$full'
            h='$14'
            bg={variant === 'outline' ? 'transparent' : '$green700'}
            borderWidth={variant === 'outline' ? '$1' : '$0'}
            borderColor='$green500'
            rounded='$sm'
            $active-bg={variant === 'outline' ? '$gray600' : '$green500'}
            {...rest}
            disabled={isLoading}
        >
            {isLoading ? (
                <ButtonSpinner color='$white'/>
            ) : (
                <Text
                    color={variant === 'outline' ? '$green500' : '$white'}
                    fontFamily='$heading'
                    fontSize='$sm'
                >
                    {title}
                </Text>
            )}

        </GluestackButton>
    )
}