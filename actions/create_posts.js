
  /**
   * Small description of your action
   * @title save create posts
   * @category Custom
   * @author fatma yousuf
   
   */
  const savecreateposts = async () => {
    const new_record=await bp.database('public.create_post').insert(
      [
        {
          bp_user_id:event.target,
          bp_channel:event.channel,
          post_data:user,
        }
      ]
    ) 
  }

  return savecreateposts()