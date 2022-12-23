/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useRef, useEffect } from "react";
import propTypes from "prop-types";
import { useIntl } from "react-intl";

import {
  EmptyStateLayout,
  useField,
  BaseHeaderLayout,
  ContentLayout,
  Box,
  Loader,
  Typography,
  DatePicker,
  GridLayout,
  TwoColsLayout,
  Searchbar,
  SearchForm,
  Button,
  Icon
} from "@strapi/design-system";
import { Plus } from '@strapi/icons';

import pluginId from "../../pluginId";
import { toProperCase } from "../../utils/strings";
import getTrad from "../../utils/getTrad";
import { sty } from "./css";

const ButtonSquare = ({ children, ...props }) => <Button {...props}>{children}</Button>

const HomePage: React.FunctionComponent = () => {
  const { formatMessage, formatDate } = useIntl();
  const [loading, setLoading] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    if (inputRef?.current != null) inputRef.current.focus();
  }, []);

  if (loading) {
    return (
      <>
        <BaseHeaderLayout
          title={formatMessage({ id: getTrad("plugin.name") })}
          subtitle={formatMessage({ id: getTrad("plugin.tagline") })}
          as="h2"
        />
        <ContentLayout>
          <Box
            style={{
              display: "flex",
              minHeight: "75vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader>Loading...</Loader>
          </Box>
        </ContentLayout>
      </>
    );
  }

  return (
    <main className="centered">
      <style>{sty}</style>
      {/* <BaseHeaderLayout
        title={formatMessage({ id: getTrad("plugin.name") })}
        subtitle={formatMessage({ id: getTrad("plugin.tagline") })}
        as="h2"
      /> */}
      <Box padding={4} id="SearchProduct">
        <SearchForm id="searchForm">
          <Searchbar
            id="searchbar"
            name="searchbar"
            onClear={() => setSearchValue("")}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            clearLabel="Clearing the plugin search"
            placeholder="e.g: Barcode or Product Name"
            // autoFocus
            ref={inputRef}
          >
            Search a product
          </Searchbar>
        </SearchForm>
      </Box>
      {/* <ContentLayout> */}
      {/* <Box padding={8} background="neutral100">
          <TwoColsLayout
            startCol={
              <Box padding={4}>
                <Typography>Hello world</Typography>
              </Box>
            }
            endCol={
              <Box padding={4}>
                <Typography>Hello world</Typography>
              </Box>
            }
          />
        </Box> */}
      <Box padding={4} background="neutral100">
        <GridLayout column={4}>
          <Box
            padding={4}
            hasRadius
            background="neutral0"
            key={`box-${1}`}
            shadow="tableShadow"
          >
            <Typography>hello world - {1}</Typography>
          </Box>
          <Box
            padding={0}
            hasRadius
            // background="neutral0"
            key={`box-${2}`}
            // shadow="tableShadow"
          >
            <GridLayout>
              {/* <Box
                padding={4}
                hasRadius
                // background="neutral0"
                // key={`box-${idx}`}
                // shadow="tableShadow"
              >
                <Typography>+</Typography>
              </Box> */}
              {Array(20)
                .fill(null)
                .map((_, idx) => (
                  <Box
                    // padding={4}
                    hasRadius
                    // background="neutral0"
                    key={`box-${idx}`}
                    shadow="tableShadow"
                  >
                    <ButtonSquare startIcon={<Icon as={Plus} />} fullWidth className="square-btn">{idx} New</ButtonSquare>

                    {/* <Typography>hello world - {idx}</Typography> */}
                  </Box>
                ))}
            </GridLayout>
          </Box>
        </GridLayout>
      </Box>
      {/* </ContentLayout> */}
    </main>
  );
};

export default HomePage;
