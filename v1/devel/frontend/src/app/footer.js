import React from 'react'
import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
    
    return {
        footer: {
            padding: '0.5em',
            backgroundColor: theme.colors.gray[2], 
            color: '#888',
            textAlign: 'center',
            fontSize: 'smaller',
            fontWeight: 'bold'
        }
    }
})

const AppFooter = ({className, props}) => {

    const release = process.env.REACT_APP_RELEASE
    const { classes, cx } = useStyles()

    return (
        <footer className={cx(classes.footer, className)} {...props}>
          Release {release} 
        </footer>
    )
}

export { AppFooter }
