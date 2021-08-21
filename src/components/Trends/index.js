import React from "react";
import {
  TrendsContainer,
  InputContainer,
  MaybeLikes,
  Item,
  ContentItem,
  DisplayName,
  User,
  ImageContainer,
  ContainerButton,
  ItemForYou,
  TrendsForYou,
} from "./styles";
import Search from "../Icons/Search";
import Options from "../Icons/Options";
const XIAOMI_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1200px-Xiaomi_logo_%282021-%29.svg.png";
const GLORIA_LOGO =
  "http://www.logosenvector.com/logo/img/gloria-leche-470.jpg";
const FORNITE_LOGO =
  "https://pbs.twimg.com/profile_images/1402151928042295296/Egj6fn3q_400x400.jpg";
export const Trends = () => {
  return (
    <TrendsContainer>
      <InputContainer>
        <Search color="gray" />
        <input type="text" placeholder="Buscar en Whisper..." />
      </InputContainer>
      <MaybeLikes>
        <h3>Tal vez te guste</h3>
        <Item>
          <ImageContainer>
            <img src={XIAOMI_LOGO} alt="xiaomi logo" />
          </ImageContainer>
          <ContentItem>
            <DisplayName>Xiaomi</DisplayName>
            <User>@Xiaomi</User>
          </ContentItem>
          <ContainerButton>
            <button>Seguir</button>
          </ContainerButton>
        </Item>
        <Item>
          <ImageContainer>
            <img src={GLORIA_LOGO} alt="gloria logo" />
          </ImageContainer>
          <ContentItem>
            <DisplayName>Leche Gloria</DisplayName>
            <User>@Leche_Gloria</User>
          </ContentItem>
          <ContainerButton>
            <button>Seguir</button>
          </ContainerButton>
        </Item>
        <Item>
          <ImageContainer>
            <img src={FORNITE_LOGO} alt="fornite logo" />
          </ImageContainer>
          <ContentItem>
            <DisplayName>Fornite_ES</DisplayName>
            <User>@Fornite_ES</User>
          </ContentItem>
          <ContainerButton>
            <button>Seguir</button>
          </ContainerButton>
        </Item>
        <span href="">Mostrar mas</span>
      </MaybeLikes>
      <TrendsForYou>
        <h3>Tendencias para ti</h3>
        <ItemForYou>
          <div>
            <p>Tendencia en Perú</p>
            <h4>#VacanciaPedroCastillo</h4>
            <p>14,2 mil Tweets</p>
          </div>
          <div>
            <Options width={25} height={25} color="gray" />
          </div>
        </ItemForYou>
        <ItemForYou>
          <div>
            <p>Tendencia en Perú</p>
            <h4>Beto Ortiz</h4>
            <p>3.254 Tweets</p>
          </div>
          <div>
            <Options width={25} height={25} color="gray" />
          </div>
        </ItemForYou>
        <ItemForYou>
          <div>
            <p>Tendencia en Perú</p>
            <h4>Susy Díaz</h4>
            <p>2.837 Tweets</p>
          </div>
          <div>
            <Options width={25} height={25} color="gray" />
          </div>
        </ItemForYou>
        <ItemForYou>
          <div>
            <p>Tendencia en Perú</p>
            <h4>Willax</h4>
            <p>1.231 Tweets</p>
          </div>
          <div>
            <Options width={25} height={25} color="gray" />
          </div>
        </ItemForYou>
        <span href="">Mostrar mas</span>
      </TrendsForYou>
    </TrendsContainer>
  );
};
