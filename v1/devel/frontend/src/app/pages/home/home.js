import React from 'react'
import { Features } from './features'
import concept from './concept2.png'

import { 
    Container, 
    Title,
    Grid,
    Text,
    createStyles,
    useMantineTheme,
    } from '@mantine/core'

import { 
    BrandGithub, 
    Book, 
    BrandPython, 
    Paperclip,
    Cloud,
    Notebook
} from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({

    wrapper: {
        padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 36,
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
    
}))

const Home = () => {

    const classes = useStyles()
    const theme = useMantineTheme()

    const features = [
        {
            icon: Notebook,
            title: 'Tutorial',
            description: 'A complete tutorial on using the different GANs is provided as a Python notebook.',
            url: 'https://github.com/sri-geospace/atmosense-abcgan/blob/main/tutorials/demo.ipynb'

        },
        {
            icon: BrandPython,
            title: 'Python Package',
            description: 'This package is available on PyPI and can be installed with pip into a virtual environment.',
            url: 'https://pypi.org/project/abcgan/'
        },
        {
            icon: BrandGithub,
            title: 'Source Code',
            description: 'The source code for the project is hosted on GitHub under the MIT license.' ,
            url: 'https://github.com/sri-geospace/atmosense-abcgan' 
        },
        {
            icon: Cloud,
            title: 'Binder',
            description: 'You can run the tutorial notebooks on Binder, a cloud-based Docker container with the abcgan package and tutorials.',
            url: 'https://mybinder.org/v2/gh/sri-geospace/atmosense-abcgan/HEAD?labpath=tutorials%2Fdemo.ipynb'

        },
        {
            icon: Book,
            title: 'Documentation',
            description: 'API documentation is available on ReadTheDocs.',
            url: 'https://atmosense-abcgan.readthedocs.io/en/latest/' 
        },
        {
            icon: Paperclip ,
            title: 'Zenodo',
            description: 'Each release of the project is archived at Zenodo with a citable DOI for publications.' ,
            url: 'https://doi.org/10.5281/zenodo.5889628'
        }
    ]

    return (
      <Container my={theme.spacing.xl}>
        <Grid gutter={80}>
         <Grid.Col span={12} sm={5}>
           <Title className={classes.title} order={2}>
             ABCGAN
           </Title>
           <Text color="dimmed">
            A generative adversarial network (GAN) to 
            produce a Generator and a Discriminator which characterize the 
            normal atmospheric background. It provides the ability to sample 
            atmospheric parameters, creating full altitude profiles of the 
            sampled measurements. The current system is trained on over 10 
            years of Incoherent Scatter Radar data collected in Alaska at 
            the Poker Flat Research Range.
           </Text>
         </Grid.Col>
         <Grid.Col span={12} sm={7}>
            <img height={300} src={concept} alt="Concept" /> 
         </Grid.Col>
        </Grid>

        <Features items={features} />
      </Container>
    )
}

export { Home }
