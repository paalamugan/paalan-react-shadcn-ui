import { Loading } from '@paalan/react-ui';
import { Box, Heading } from '@paalan/react-ui/base';

export const AuthenticationLoader: React.FC = () => {
  return (
    <Box className="h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <Box className="mx-auto max-w-max">
        <Box className="flex min-h-[40px] items-center gap-2 bg-white p-6">
          <Loading boxSize="5" />
          <Heading as="h3" className="text-gray-700">
            Authentication in progress...
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};
