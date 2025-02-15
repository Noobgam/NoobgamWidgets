import React, {useState} from 'react';
import {Badge, Box, Button, Flex, Heading, Text} from '@chakra-ui/react';
import {CalendarEvent} from "../models";

export const EventCard: React.FC<{ event: CalendarEvent }> = ({ event }) => {
    const startTime = new Date(event.start.dateTime);
    const endTime = new Date(event.end.dateTime);
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        // Trigger the clicked state (e.g., to change color)
        setClicked(true);
        // Reset the state after a short delay (e.g., 300ms)
        setTimeout(() => setClicked(false), 300);
    };

    return (
        <Box
            p={4}
            borderRadius="lg"
            bg="whiteAlpha.200"
            backdropFilter="blur(10px)"
            mb={3}
            border="1px solid"
            borderColor="whiteAlpha.300"
        >
            <Flex justify="space-between" align="center">
                <Box>
                    <Heading size="md" color="white">
                        {event.summary}
                    </Heading>
                    <Text color="whiteAlpha.800">
                        {startTime.toLocaleTimeString()} - {endTime.toLocaleTimeString()}
                    </Text>
                </Box>
                <Badge
                    _hover={{ bg: clicked ? "green.400" : "purple.400" }}
                    colorScheme={event.status === 'confirmed' ? 'green' : 'yellow'}
                    borderRadius="full"
                    px={2}
                >
                    {event.status}
                </Badge>
                <Button
                    className="interactive"
                    onClick={handleClick}
                    bg={clicked ? "green.300" : "blue.300"}
                    color="white"
                    _hover={{ bg: clicked ? "green.400" : "blue.400" }}
                    transition="background-color 0.2s ease"
                >
                    Click me
                </Button>
            </Flex>
        </Box>
    );
};
