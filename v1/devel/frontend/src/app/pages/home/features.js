import React from 'react'
import {
    SimpleGrid, 
    Text, 
    ActionIcon,
} from '@mantine/core'

const Features = ({items}) => {

    const features = items.map((feature) => (
        <div key={feature.title}>
          <ActionIcon 
            size='xl' 
            radius="sm" 
            variant='filled' 
            color='blue'
            component='a'
            target="_blank"
            rel="noopener noreferrer"
            href={feature.url}
          >
            <feature.icon size={26} />
          </ActionIcon>
          <Text size="lg" mt="sm" weight={500}>
            {feature.title}
          </Text>
          <Text color="dimmed" size="sm">
            {feature.description}
          </Text>
        </div>
    ))

    return (
        <SimpleGrid 
            cols={3} 
            my="2em"
            spacing={30} 
            breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        >
          {features}
        </SimpleGrid>
    )
}

export { Features }
