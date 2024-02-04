import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../redux/store';
import { login, logout } from '../redux/user/userSlice';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { username, isAdmin } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    console.log('current user', { username, isAdmin });
    if (username !== null && isAdmin) {
      navigate('/');
    } else if (username !== null && !isAdmin) {
      dispatch(logout());
    }
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    console.log({ username, password });
    dispatch(
      login({ username: username as string, password: password as string }),
    );
  };
  return (
    <div className="mt-[40px]">
      <Container
        maxWidth="xs"
        component="section"
      >
        <Box className="flex flex-col items-center mt-10">
          <Avatar
            className="mb-5 "
            style={{ backgroundColor: 'red' }}
          >
            <LockOutlined />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
          >
            Sign in
          </Typography>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-1 py-2 px-6 shadow-md"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="mt-3 mb-2"
            >
              Sign In
            </Button>
            <Grid
              container
              className="mt-2"
            >
              <Grid
                item
                xs
              >
                <Link
                  href="#"
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
