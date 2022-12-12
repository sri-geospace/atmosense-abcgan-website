import React from 'react'
import { 
    Container, 
    Title,
    Text,
    SimpleGrid,
    createStyles
} from '@mantine/core'

import agu2022 from './AGU_2022_Presentation-small.png'
import cedar2022 from './cedar-atmosense-2022-v1-small.png'
import agu2021 from './SA15B-1929-AGUFall2021_Printed_Poster-small.png'

const useStyles = createStyles((theme) => ({

    presentation: {
    },

    poster: {
        width: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
        padding: 5, 
        border: '1px solid lightgray'
    }

}))

const Presentations = () => {

    const { classes } = useStyles()

    const items = [
        {
            title: 'AGU Fall Meeting 2022',
            img: agu2022,
            url: 'https://isr.sri.com/ftp/abgcan/presentations/AGU_2022_Presentation.pdf'
        },
        {
            title: 'CEDAR Workshop 2022',
            img: cedar2022,
            url: 'https://isr.sri.com/ftp/abgcan/presentations/cedar-atmosense-2022-v1.pdf'
        },
        {
            title: 'AGU Fall Meeting 2021',
            img: agu2021,
            url: 'https://isr.sri.com/ftp/abgcan/presentations/SA15B-1929%20AGUFall2021_Printed_Poster.pdf' 
        },
    ]

    const presentations = items.map(presentation => (
        <div key={presentation.title} className={classes.presentation}>
          <Text size="xl" my="sm" weight={500} underline> 
            {presentation.title}
          </Text>
          <a href={presentation.url} target='_blank' rel="noreferrer">
            <img 
              className={classes.poster}
              src={presentation.img} 
              alt={presentation.title} 
            />
          </a>
        </div>
    ))

    return (
        <Container size="md" mt="1em">
          <Title sx={(theme) => ({ color: theme.colors.blue })} >
            Presentations
          </Title>

          <SimpleGrid 
            cols={2} 
            my="2em" 
            spacing={30}
            breakpoints={[{ maxWidth: 'md', cols: 1 }]}
          > 
            {presentations}
          </SimpleGrid> 

        </Container>
    )
}

export { Presentations } 
