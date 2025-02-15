import React from 'react';
import {Box, Heading, VStack} from '@chakra-ui/react';
import {CalendarEvent} from "../models";
import {EventCard} from "./EventCard";

export const Calendar: React.FC<{ events: CalendarEvent[] }> = ({ events }) => {
    return (
        <Box
            maxW="800px"
            w="100%"
            p={6}
            className={"transparent"}
        >
            <VStack align="stretch">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </VStack>
        </Box>
    );
};
