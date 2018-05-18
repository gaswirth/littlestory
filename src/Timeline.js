import React, { Component } from 'react';
import styled from 'styled-components';
import { stories } from './data.js';
import { colors, block } from './styles.js';


const TimelineWrapper = styled.div`
	margin: 1em auto;
	${block}
`;


const Block = styled.div`
	${block}
	margin-top: ${props => props.marginY || '0'};
	margin-bottom: ${props => props.marginY || '0'};
	${props => {
		if (props.showBorder) {
			return `
				border: 1px solid ${colors.black};
				border-radius: 5px;
			`;
		}
	}}
`;


const StoryItem = styled.div`
	padding-bottom: 1em;
	margin-bottom: 1em;
	border-bottom: 1px solid ${colors.black};
	
	&:last-of-type {
		margin-bottom: 0;
		border-bottom: none;
	}
`;


const P = styled.p`
	padding-left: 1em;
	border-left: 3px solid ${colors.lightBlue};
`;


const Sep = styled.span`
	margin: 0 0.5em;
`;


const TagsLabel = styled.h3`
	display: inline-block;
	float: left;
`;


const TagsListUl = styled.ul`
	list-style: none;
	padding-left: 0;
	display: inline-block;
`;


const Tag = styled.li`
	width: auto;
	display: inline-block;
	padding: 0.5em;
	border: 2px solid gray;
	margin: 0 1em;
`;


class Timeline extends Component {
	render() {
		return (
			<TimelineWrapper>
				{stories.map((story) => {
					return (
						<StoryItem>
							<TitleBar user={story.user} title={story.title} />
							<Story content={story.content} />
							<TagList tags={story.tags} />
						</StoryItem>
					)
				})}
			</TimelineWrapper>
		)
	}
}
export default Timeline;


class TitleBar extends Component {
	render() {
		return (
			<div className="titleBar">
				<span className="user">
					{this.props.user}
				</span>
				<Sep>&bull;</Sep>
				<span className="storyTitle">
					{this.props.title}
				</span>
			</div>
		)
	}
}


class Story extends Component {
	render() {
		return (
			<Block className="story">
				<P>{this.props.content}</P>
			</Block>
		)
	}
}


class TagList extends Component {
	render() {
		let tagList = this.props.tags;
		
		return (
			<Block className="tags" showBorder="true" marginY="1em">
				<TagsLabel>Tags:</TagsLabel>
				<TagsListUl>
					{tagList.map((tag) => (
						<Tag className="tag">{tag}</Tag>
					))}
				</TagsListUl>
			</Block>
		)
	}
}