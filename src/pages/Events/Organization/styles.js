import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '100%',
    position: 'relative',
  },
  boxTeam: {
    fontSize: 18,
    lineHeight: '94.9%',
    fontStyle: 'normal',
    fontWeight: 400,
    marginTop: 33,
    color: '#212121',
  },
  teamName: {
    marginBottom: 15,
  },
  teamLogo: {
    border: '1px solid #E0E6F1',
  },
  boxMatch: {
    border: '1px solid #E0E6F1',
    marginTop: 24,
    fontSize: 18,
    lineHeight: '94.9%',
    fontStyle: 'normal',
    fontWeight: 400,
    color: '#212121',
  },
  win: {
    color: '#2EC820',
    fontWeight: 700,
  },
  lose: {
    color: '#D32F2F',
    fontWeight: 700,
  },
  score: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: '94.9%',
  },
  goBack: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '94.9%',
    color: '#212121',
    cursor: 'pointer',
  },
  button: {
    marginTop: 32,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '94.9%',
    color: '#FFFFFF',
  },
}))
