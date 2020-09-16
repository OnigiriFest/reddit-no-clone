import { Box, Button } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import { useForgotPasswordMutation } from '../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { Layout } from '../components/Layout';

const ForgotPassword: React.FC<{}> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();

  return (
    <Layout>
      <Wrapper variant="small">
        <Formik
          initialValues={{ email: '' }}
          onSubmit={async (values) => {
            await forgotPassword(values);
            setComplete(true);
          }}>
          {({ isSubmitting }) =>
            complete ? (
              <Box>
                if an account with that email exists, we sent you an email
              </Box>
            ) : (
              <Form>
                <InputField
                  name="email"
                  placeholder="email"
                  label="Email"
                  type="email"
                />
                <Button
                  type="submit"
                  variantColor="teal"
                  mt="4"
                  isLoading={isSubmitting}>
                  forgot password
                </Button>
              </Form>
            )
          }
        </Formik>
      </Wrapper>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);
