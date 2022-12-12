import React from 'react'
import { useBooleanToggle } from '@mantine/hooks'
import { NavLink } from 'react-router-dom'
import logo from 'support/assets/SRIMarkW.png'

import { 
    createStyles, 
    Box,
    Group, 
    Burger, 
    Paper, 
    Text, 
    Transition,
    Container,
    Header,
    } from '@mantine/core'

const SMALL_HEADER_HEIGHT = 50

const useStyles = createStyles((theme) => ({

    header: {
        background: `${theme.colors.blue[9]}`,
    },

    inner: {
        height: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    brand: {
        display: 'flex',
        color: 'white'
    },

    title: {
        placeSelf: 'center center',
        textTransform: 'uppercase',
        [theme.fn.smallerThan('sm')]: {
            fontSize: theme.fontSizes.sm
        }
    },

    logo: {
        display: 'none',
        placeSelf: 'center start',
        height: '30px',
        opacity: 0.75,
        marginRight: 5,
        [theme.fn.smallerThan('sm')]: {
            display: 'none'
        },
    }, 

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none'
        }
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: 'white', 
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        opacity: 0.7,

        '&:hover': {
            opacity: 1, 
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
            color: theme.colors[theme.primaryColor][5],
            '&:hover': {
                backgroundColor: theme.colors[theme.primaryColor][2],
                color: theme.colors[theme.primaryColor][7],
            },
        },
     
        '&.active, &active:hover': {
            color: theme.white,
            opacity: 1,
            backgroundColor: theme.colors.blue[7] 
        },
    },

    dropdown: {
        position: 'absolute',
        top: SMALL_HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none'
        }
    }

}))

const AppHeader = ({ links, className }) => {

    const [opened, toggleOpened] = useBooleanToggle(false);
    const { classes, cx } = useStyles();

    const items = links.map((link) => (
        <NavLink
            key={link.label}
            to={link.link}
            replace
            className={classes.link}
            onClick={(event) => {
                toggleOpened(false);
            }}
        >
          {link.label}
        </NavLink>
    ))

    return (
      <Header className={cx(classes.header, className)}>
        <Container>
          <div className={classes.inner}>
            <div className={classes.brand}>
              <img className={classes.logo} src={logo} alt="SRI Logo" />
              <Text className={classes.title} size="lg"> 
                Atmosense Background Characterization
              </Text>
            </div>
            <Group className={classes.links} spacing={5} >
              {items}
            </Group>

            <Burger
              opened={opened}
              onClick={() => toggleOpened()}
              className={classes.burger}
              size="sm"
              color="white"
            />
          </div>

          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    )
}

export { AppHeader }
