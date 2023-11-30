// Import everything needed to use the `useQuery` hook
import { gql } from '@apollo/client';

export const GET_ALL_MOVIES = gql`
  {
    allFilms {
      films {
        id
        title
      }
      totalCount
    }
  }
`;
