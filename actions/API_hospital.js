  const axios = require('axios')
  /**
   * Encoding Arabic town for API
   * @title EncodingTown
   * @category Custom
   * @author Fatma Yousuf
   * @param {string} town - town value from the user
   */
  const EncodingTown = async town => {
    const encodedTown = encodeURIComponent(town)
    const { data } = await axios.get(
      `http://hopeteam-001-site1.gtempurl.com/api/AiPost/GetHospitalsByCity?city=${encodedTown}`
    )
    session.is_valid = data
    return
  }

  return EncodingTown(args.town)