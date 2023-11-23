import {
    Avatar,
    Box, Button,
    Flex,
    Icon,
    IconButton,
    Popover, PopoverArrow, PopoverBody, PopoverContent,
    PopoverTrigger, VStack
} from "@chakra-ui/react";
import {GiHamburgerMenu} from "react-icons/gi";
import {FC} from "react";
import {FaRegUserCircle} from "react-icons/fa";
import {IoMdExit} from "react-icons/io";

interface HeaderProps {
    toggleSidebar: VoidFunction;
}

export const Header: FC<HeaderProps> = ({toggleSidebar}) => {
    return (
        <Flex
            bg={'gray.200'}
            w={'100%'}
            p={'20px'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <IconButton
                onClick={toggleSidebar}
                aria-label={'sidebar'}
                icon={<Icon as={GiHamburgerMenu} />}
            />
            <Box>
                <Popover closeOnEsc={true} autoFocus={false}>
                    <PopoverTrigger>
                        <Avatar
                            cursor={'pointer'}
                            size='md'
                            name='Kola Tioluwani'
                            src='https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Round&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                        />
                    </PopoverTrigger>
                    <PopoverContent maxW={'150px'}>
                        <PopoverArrow />
                        <PopoverBody >
                            <VStack>
                                <Button w={'100%'}><Icon as={FaRegUserCircle} />Profile</Button>
                                <Button w={'100%'}><Icon as={IoMdExit} />Logout</Button>
                            </VStack>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>
        </Flex>
    )
}
