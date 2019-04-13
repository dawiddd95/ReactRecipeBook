import React from 'react'

import * as S from './StyledDetails.js';

const Details = ({recipe}) => {
   return (  
      <S.Wrapper>
         <S.Img style={{'backgroundImage': `url(${recipe.image_url})`}}></S.Img>
         <S.Content>
            <S.Main>
               <S.Title>{recipe.title}</S.Title>
               <S.Publisher>
                  <S.Span>Publisher:</S.Span>
                  <S.Paragraph>{recipe.publisher}</S.Paragraph>
               </S.Publisher>
               <S.Url>
                  <S.Span>Publisher website:</S.Span>
                  <S.Link href={recipe.publisher_url} target='__blank'>
                     {recipe.publisher_url}
                  </S.Link>
               </S.Url>
               <S.Url>
                  <S.Span>Recipe website: </S.Span>
                  <S.Link href={recipe.source_url} target='__blank'>
                     {recipe.source_url}
                  </S.Link>
               </S.Url>
            </S.Main>
            <S.Footer>
               <S.Link footer href={recipe.publisher_url} target='__blank'>
                  VISIT PUBLISHER
               </S.Link>
               <S.Link footer href={recipe.source_url} target='__blank'>
                  VIEW RECIPE 
               </S.Link>
            </S.Footer>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default Details;