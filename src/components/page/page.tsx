import * as React from 'react';
import {
  User
} from '../../types';
import Header from "../header/header";

interface Props {
  className?: string;
  children?: React.ReactNode;
  isAuth: boolean;
  user: User;
}

const Page: React.FC<Props> = (props: Props) => {
  const {
    className,
    children,
    isAuth,
    user,
  } = props;

  return (
    <div className={`page ${className}`}>
      {<Header
        isAuth={isAuth}
        user={user}
      />}
      {children}
    </div>
  );
};

export default Page;
