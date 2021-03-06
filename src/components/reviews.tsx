import React, { FunctionComponent, useState } from "react";

interface small_review {
    image:string;
    quote:string;
    name:string;
    position:string;
}

interface main_review{
    icon:string;
    title:string;
    image:string;
    score:number;
    name:string;
    text:string;
    bold_text:string;
}

type reviewProps ={
    small_reviews:small_review[];
    main_review:main_review;
}

const Reviews: FunctionComponent<reviewProps> = ({small_reviews,main_review}) => {
    return(
        <div className="reviews_container">
            <div className="reviews_main">
                <div className="reviews_title">
                    <img className="reviews_titleIcon" src={main_review.icon}/>
                    <h1 className="reviews_titleText">{main_review.title}</h1>
                </div>
                <div className="reviews_images">
                    <img className="reviews_image" src={main_review.image}/>
                </div>
                <div className="reviews_score">
                    <div className="reviews_scoreNumber">
                        <h2 className="reviews_scoreNumberText"><span>&#9733;</span>{main_review.score}</h2>
                    </div>
                    <div className="reviews_scoreName">
                        <h4 className="reviews_scoreNameLabel">Score on:</h4>
                        <h3 className="reviews_scoreNameCompany">{main_review.name}</h3>
                    </div>
                </div>
                <div className="reviews_text">
                    <p className="reviews_textParagraph"><span>{main_review.bold_text}</span>{main_review.text}</p>
                </div>
            </div>
            <div className="reviews_small">
                {small_reviews.map(function(small_review) {
                    return(
                    <div className="reviews_smallReview">
                        <div className="reviews_smallReviewDQ">
                            <h1>&#8220;</h1>
                        </div>
                        <div className="reviews_smallReviewText">
                            <h3 className="reviews_smallReviewQuote">{small_review.quote}</h3>
                            <h2 className="reviews_smallReviewName">{small_review.name}</h2>
                            <h4 className="reviews_smallReviewPosition">{small_review.position}</h4>
                        </div>
                        <div className="reviews_smallReviewImage">
                            <img className="reviews_smallReviewImg" src={small_review.image}/>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Reviews;