import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import MainWrapper from "@/components/MainWrapper";
import ProductsGrid from "@/components/ProductsGrid";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SearchInput = styled(Input)`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.27rem;
`;
const InputWrapper = styled.div`
  position: sticky;
  top: 75px;
  margin: 25px 0;
  padding: 5px 0;
  background-color: #eee;
`;

export default function SearchPage() {
  const [phrase, setPhrase] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const debouncedSearch = debounce((phrase) => {
      axios
        .get("/api/products?phrase=" + encodeURIComponent(phrase))
        .then((response) => {
          setProducts(response.data);
          setIsLoading(false);
        });
    }, 500);

    if (phrase.length > 0) {
      setIsLoading(true);
      debouncedSearch(phrase);
    } else {
      setProducts([]);
    }
    // Cleanup function to cancel the debounce if phrase changes
    return () => {
      debouncedSearch.cancel();
    };
  }, [phrase]);

  // const debouncedSearch = useCallback(debounce(searchProducts, 500), []);
  // useEffect(() => {
  //   if (phrase.length > 0) {
  //     setIsLoading(true);
  //     debouncedSearch(phrase);
  //   } else {
  //     setProducts([]);
  //   }
  // }, [phrase]);

  // function searchProducts(phrase) {
  //   axios
  //     .get("/api/products?phrase=" + encodeURIComponent(phrase))
  //     .then((response) => {
  //       setProducts(response.data);
  //       setIsLoading(false);
  //     });
  // }
  return (
    <MainWrapper>
      <Header />
      <Center>
        <InputWrapper>
          <SearchInput
            autoFocus
            value={phrase}
            onChange={(ev) => setPhrase(ev.target.value)}
            placeholder="Search for products..."
          />
        </InputWrapper>
        {!isLoading && phrase !== "" && products.length === 0 && (
          <h2>No products found for query &quot;{phrase}&quot;</h2>
        )}
        {isLoading && <Spinner fullWidth={true} />}
        {!isLoading && products.length > 0 && (
          <ProductsGrid products={products} />
        )}
      </Center>
      <Footer />
    </MainWrapper>
  );
}
