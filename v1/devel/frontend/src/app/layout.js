import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, createStyles } from '@mantine/core'

import { AppHeader } from './header'
import { AppFooter } from './footer'

const useStyles = createStyles((theme) => {

    return {

        page: {
            height: '100vh',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto 1fr auto',
            gridTemplateAreas: "'header' 'main' 'footer'",
        },

        header: {
            gridArea: 'header'
        },

        main: {
            gridArea: 'main',
            overflow: 'auto',
            boxShadow: '0px 1px 10px rgba(0,0,0,0.25)',
            zIndex: '5',
        },

        footer: {
            gridArea: 'footer'
        }
    }
})

const Layout = () => {

    const { classes } = useStyles()

    let links = [
        { link: '/',                label: 'Home'           },
        { link: '/presentations',   label: 'Presentations'  },
        { link: '/contacts',        label: 'Contact Us'     }
        ]

    return (
        <Box className={classes.page}> 
          <AppHeader className={classes.header} links={links} /> 
          <main className={classes.main}> 
            <section className={classes.section} > 
              <Outlet />
            </section>
          </main>
          <AppFooter className={classes.footer}/> 
        </Box>
    )
}

export { Layout }
