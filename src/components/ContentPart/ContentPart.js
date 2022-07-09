import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMoreContent10Effect } from '../../redux/effects/effects'
import './contentPart.scss'

const ContentPart = () => {
    const dispatch = useDispatch()
    const { content, categoryId } = useSelector(state => state.reducer)

    const [page, setPage] = useState(1)

    const renderContent = ({ id, url }) => {
        return (
            <div className="content_image_block" style={{ backgroundImage: `url(${url})` }} key={id + Math.random()}>
            </div>
        )
    }

    const loadMore = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        if (!categoryId) return
        dispatch(loadMoreContent10Effect(page))
    }, [page])

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