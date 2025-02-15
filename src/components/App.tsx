import {createRoot} from 'react-dom/client';
import React, {useEffect, useState} from 'react';
import {Alert, AlertDescription, AlertTitle, Container, Spinner, Stack} from '@chakra-ui/react';
import {CalendarEvent} from "../models";
import {Calendar} from "./Calendar";
import {Provider} from "./ui/provider";

const root = createRoot(document.getElementById('root'));

const App: React.FC = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Replace this with your actual data source.
        // For now, we simulate fetching with a timeout.
        const fetchEvents = async () => {
            try {
                // Simulated event data; replace with your actual fetch logic.
                const simulatedData: CalendarEvent[] = [
                    {
                        id: "e74d875b016e4f4995ee8b18a655226b_20250213T100000Z",
                        summary: "wfh",
                        status: "confirmed",
                        start: {
                            dateTime: "2025-02-13T11:00:00+01:00",
                            timeZone: "Europe/Berlin"
                        },
                        end: {
                            dateTime: "2025-02-13T17:00:00+01:00",
                            timeZone: "Europe/Berlin"
                        }
                    }
                    // Add more events if needed
                ];

                // Simulate network delay
                setTimeout(() => {
                    setEvents(simulatedData);
                    setIsLoading(false);
                }, 1000);
            } catch (err) {
                setError("Failed to fetch calendar events");
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <Provider>
            <Container
                maxW="container.xl"
                centerContent
                py={8}
                className={"transparent"}
                bg={"transparent"}
            >
                {isLoading ? (
                    <Spinner size="xl" color="white" />
                ) : error ? (
                    <Stack gap="4" width="full">
                        <Alert.Root status="error">
                            <Alert.Indicator />
                            <Alert.Title>
                                {error}
                            </Alert.Title>
                        </Alert.Root>
                    </Stack>
                ) : (
                    <Calendar events={events} />
                )}
            </Container>
        </Provider>
    );
};

root.render(<App />);
