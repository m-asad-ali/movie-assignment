import * as React from 'react';
import { Box, ThemeProvider } from '@mui/system';
import { Container, Divider } from '@material-ui/core';

export default function BoxSx() {
    return (
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: '#F3EEEA',
                        dark: '#EBE3D5',
                    },
                },
            }}
        >
            <Container sx={{
                display: 'flex',
                alignItems: 'center',
            }}>

                <Box
                    sx={{
                        marginTop: 5,
                        marginBottom: 5,
                        height: 300,
                        borderRadius: 10,
                        bgcolor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    }}
                />
            </Container>
            {/* <Divider /> */}
        </ThemeProvider>
    );
}