import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMoreContentEffect } from '../../redux/effects/effects'
import './contentPart.scss'

const ContentPart = () => {
    const dispatch = useDispatch()
    const { content, categoryId } = useSelector(state => state.reducer)
    const [pageSize, setPageSize] = useState(10)

    const renderContent = ({ id, url }) => {
        return (
            <div className="content_image_block" style={{ backgroundImage: `url(${url})` }} key={id}>
            </div>
        )
    }

    const loadMore = () => {
        setPageSize(pageSize + 10)
    }

    useEffect(() => {
        setPageSize(10)
    }, [categoryId])

    useEffect(() => {
        if (!categoryId) return
        dispatch(loadMoreContentEffect(pageSize))
    }, [pageSize])

    return (
        <div className="content_main">
            <div className="content_wrapper">
                {!content.length ? "No category choosen!" :
                    content.map(renderContent)}
            </div>
            {!!content.length && <div onClick={loadMore} className="content_loadmore_button">
                Load More
            </div>}
        </div>
    );
};

export default ContentPart;