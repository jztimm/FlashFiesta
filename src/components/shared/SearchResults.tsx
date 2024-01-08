import { Models } from "appwrite";
import Loader from "./Loader";
// import GridPostList from "./GridPostList";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

const SearchResults = ({
  isSearchFetching,
}: // searchedPosts,
SearchResultsProps) => {
  // While fetching, render loader
  if (isSearchFetching) return <Loader />;

  // If searchedPosts is not empty, then show searched posts
  // if (searchedPosts && searchedPosts.documents.length > 0) {
  //   return <GridPostList posts={searchedPosts.documents} />;
  // }

  // If no searchPosts found, then show "No results found"
  return (
    <p className="text-lighjt-4 mt-10 text-center w-full">No results found</p>
  );
};

export default SearchResults;
