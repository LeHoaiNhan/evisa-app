export default function Step1Personal({ data, onChange, onNext }) {
  return (
    <div className="step-content">
      <div className="section-title">Họ tên & Giới tính</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Họ <span className="req">*</span></label>
          <input type="text" placeholder="VD: NGUYEN" value={data.lastName} onChange={e => onChange('lastName', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Tên đệm & Tên <span className="req">*</span></label>
          <input type="text" placeholder="VD: VAN AN" value={data.firstName} onChange={e => onChange('firstName', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Giới tính <span className="req">*</span></label>
          <div className="gender-options">
            {['Nam','Nữ','Khác'].map(g => (
              <label key={g} className={`gender-opt ${data.gender === g ? 'selected' : ''}`}>
                <input type="radio" name="gender" checked={data.gender === g} onChange={() => onChange('gender', g)} />
                {g}
              </label>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Ngày sinh <span className="req">*</span></label>
          <input type="date" value={data.dob} onChange={e => onChange('dob', e.target.value)} />
        </div>
      </div>

      <div className="divider" />
      <div className="section-title">Liên hệ</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Email <span className="req">*</span></label>
          <input type="email" placeholder="email@example.com" value={data.email} onChange={e => onChange('email', e.target.value)} />
          <span className="hint">Visa sẽ được gửi về email này</span>
        </div>
        <div className="form-group">
          <label>Số điện thoại <span className="req">*</span></label>
          <input type="tel" placeholder="+84 xxx xxx xxx" value={data.phone} onChange={e => onChange('phone', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Quốc tịch <span className="req">*</span></label>
          <select value={data.nationality} onChange={e => onChange('nationality', e.target.value)}>
            {['Việt Nam','Mỹ','Nhật Bản','Hàn Quốc','Trung Quốc'].map(n => <option key={n}>{n}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label>Nơi sinh <span className="req">*</span></label>
          <input type="text" placeholder="Thành phố, Quốc gia" value={data.birthPlace} onChange={e => onChange('birthPlace', e.target.value)} />
        </div>
      </div>

      <div className="divider" />
      <div className="section-title">Ảnh chân dung</div>
      <div className="upload-zone">
        <div className="upload-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
          </svg>
        </div>
        <p>Kéo thả hoặc click để tải ảnh</p>
        <span>JPG, PNG · Nền trắng, mặt thẳng · Tối đa 5MB</span>
      </div>

      <div className="form-actions">
        <div className="secure-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Thông tin được mã hóa & bảo mật
        </div>
        <button className="btn-primary" onClick={onNext}>
          Tiếp theo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
