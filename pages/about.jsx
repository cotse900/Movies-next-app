import React from 'react';
import Link from "next/link";
import Card from "react-bootstrap/Card";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export function getStaticProps(){
  return new Promise((resolve,reject)=>{
    fetch("https://ruby-precious-coyote.cyclic.app/api/movies/573a13d2f29313caabd92a92")
      .then(res => res.json())
      .then(data => {
        resolve({ props: { staticPost: data } })
      })
      .catch(err=>{
        reject(err)
      })
  })
}

export default function About({ staticPost }){
  return (
    <>
      <PageHeader text="About the developer"/>
      <Card>
        <Card.Body>
          I am a graduate of Computer Programming at Seneca Polytechnic, and now I am writing this app for fun.
          This is not an assignment.<br /><br />
          I like Tarantino&apos;s movies, so, here you go, Django.<br /><br />
          <Link href="/movies/Django Unchained" legacyBehavior>
            <a>Django Unchained</a>
          </Link>
        </Card.Body>
        <MovieDetails movie={ staticPost }/>
      </Card>
    </>
  )
}
