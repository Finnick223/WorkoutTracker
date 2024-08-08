import { LinkProps, Link as MuiLink } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { motion } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

const LinkComponent = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <MuiLink
    {...props}
    component={ReactRouterLink}
    to={props.href ?? '#'}
    relative="path"
    ref={ref}
  />
));

const MotionLink = motion(LinkComponent);

const CustomLink = ({
  href,
  color,
  children,
  variant,
  ...props
}: {
  href: string;
  color: string;
  variant?: Variant;
  children: ReactNode;
}) => {
  return (
    <MotionLink
      href={href}
      underline="none"
      color={color}
      variant={variant}
      sx={{ ':hover': { color: 'gray' } }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {children}
    </MotionLink>
  );
};

export default CustomLink;
